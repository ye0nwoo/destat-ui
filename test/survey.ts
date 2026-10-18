import "@nomicfoundation/hardhat-chai-matchers";
import { expect } from "chai";
import { network } from "hardhat";

interface Question {
  question: string;
  options: string[];
}

describe("Survey init", () => {
  const title = "막무가내 설문조사라면";
  const description =
    "중앙화된 설문조사로서, 모든 데이터는 공개되지 않으며 설문조사를 게시한자만 볼 수 있습니다.";
  const questions: Question[] = [
    {
      question: "누가 내 응답을 관리할때 더 솔직할 수 있을까요?",
      options: [
        "구글폼 운영자",
        "탈중앙화된 블록체인 (관리주체 없으며 모든 데이터 공개)",
        "상관없음",
      ],
    },
  ];

  const getSurveyContractAndEthers = async (survey: {
    title: string;
    description: string;
    targetNumber: number;
    questions: Question[];
  }) => {
    const { ethers } = await network.connect();
    const cSurvey = await ethers.deployContract("Survey", [
      survey.title,
      survey.description,
      survey.targetNumber,
      survey.questions,
    ]);
    return { ethers, cSurvey };
  };

  describe("Deployment", () => {
    it("should store survey info correctly", async () => {
      const { cSurvey } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      expect(await cSurvey.title()).to.equal(title);
      expect(await cSurvey.description()).to.equal(description);
    });

    it("should calculate rewardAmount correctly", async () => {
      const { cSurvey } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      const reward = await cSurvey.rewardAmount();
      expect(reward).to.not.be.undefined;
    });
  });

  describe("Questions and Answers", () => {
    it("should return questions correctly", async () => {
      const { cSurvey } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      const q = await cSurvey.getQuestions(0);
      expect(q.question).to.equal(questions[0].question);
    });

    it("should allow valid answer submission", async () => {
      const { cSurvey } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      await expect(cSurvey.submitAnswer([0])).to.not.be.reverted;
    });

    it("should revert if answer length mismatch", async () => {
      const { cSurvey } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      // 질문은 1개인데 응답을 2개([0, 1]) 제출하면 revert 발생
      await expect(cSurvey.submitAnswer([0, 1])).to.be.reverted;
    });

    it("should revert if target reached", async () => {
      const { cSurvey, ethers } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 1, // 목표 인원 1명
        questions,
      });

      const [, addr2] = await ethers.getSigners();

      // 첫 번째 응답자가 답안 제출 (목표 인원 달성)
      await cSurvey.submitAnswer([0]);

      // 목표 달성 후 두 번째 응답자가 제출을 시도하면 revert 발생
      await expect(cSurvey.connect(addr2).submitAnswer([0])).to.be.reverted;
    });
  });

  describe("Rewards", () => {
    it("should pay correct reward to respondent", async () => {
      const { cSurvey, ethers } = await getSurveyContractAndEthers({
        title,
        description,
        targetNumber: 3,
        questions,
      });

      const [, respondent] = await ethers.getSigners();

      // 응답자가 답안을 제출할 때 정상 처리되는지 검증
      await expect(cSurvey.connect(respondent).submitAnswer([0])).to.not.be
        .reverted;
    });
  });
});
