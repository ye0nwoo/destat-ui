import { SendIcon, User2Icon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Form, Link } from "react-router";
import MessageBubble from "../components/message-bubble";

interface Questions {
  question: string;
  opetions: string[];
}
const questions: Questions[] = [
  {
    question: "가장 선호하는 프론트엔드 개발 기술은 무엇인가요?",
    opetions: ["React", "Vue.js", "Angular", "Svelte"],
  },
  {
    question: "평소 개발할 때 주로 사용하는 주력 운영체제(OS)는 무엇인가요?",
    opetions: ["macOS", "Windows", "Linux", "ChromeOS"],
  },
  {
    question: "가장 선호하는 코드 에디터 또는 IDE는 무엇인가요?",
    opetions: ["VS Code", "WebStorm", "Vim", "IntelliJ IDEA"],
  },
  {
    question: "가장 선호하는 백엔드 언어는 무엇인가요?",
    opetions: ["Node.js (JavaScript/TypeScript)", "Python", "Java", "Go"],
  },
  {
    question: "버전 관리 시스템으로 주로 어떤 것을 사용하시나요?",
    opetions: ["Git / GitHub", "GitLab", "Bitbucket", "SVN"],
  },
  {
    question: "주로 이용하는 AI 코딩 보조 도구가 있으신가요?",
    opetions: ["GitHub Copilot", "ChatGPT", "Claude", "사용하지 않음"],
  },
  {
    question: "가장 선호하는 CSS 스타일링 방식은 무엇인가요?",
    opetions: [
      "Tailwind CSS",
      "Styled Components",
      "CSS Modules",
      "Plain CSS / SCSS",
    ],
  },
  {
    question: "선호하는 프로젝트 배포 및 호스팅 플랫폼은 어디인가요?",
    opetions: ["Vercel", "Netlify", "AWS", "GitHub Pages"],
  },
  {
    question: "개발 공부를 할 때 주로 어떤 방식을 선호하시나요?",
    opetions: [
      "공식문서 및 텍스트 독학",
      "유튜브 및 온라인 강의",
      "부트캠프 및 오프라인 모임",
      "토이 프로젝트 직접 구현",
    ],
  },
  {
    question: "가장 중요하게 생각하는 개발자 역량은 무엇인가요?",
    opetions: [
      "문제 해결 능력",
      "코드 가독성 및 유지보수성",
      "새로운 기술 습득 속도",
      "원활한 커뮤니케이션",
    ],
  },
];

export default function Survey() {
  return (
    <div className="grid grid-cols-3 w-screen gap-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="font-extrabold text-3xl">
            Sample Survey
          </CardTitle>
          <CardDescription>
            This is a simple survey. Let's join to get Rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="obverflow-y-auto h-[70vh]">
          <h1 className="font-semibold text-xl pb-4">Survey Progress</h1>
          <div className="gap-5 grid grid-cols-2">
            {questions.map((q, i) => (
              <div className="flex flex-col">
                <h1 className="font-bold">{q.question}</h1>
                <div className="flex flex-col pl-2 gap-1">
                  {q.opetions.map((o, j) => (
                    <div className="flex flex-row justify-center items-center relative">
                      <div className="left-2 absolute text-xs font-semibold">
                        {o}
                      </div>
                      <div className="w-full bg-gray-200 h-5 rounded-full">
                        <div className="bg-blue-400 w-14 h-5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Live Chat</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 overflow-y-auto h-[70vh]">
          {Array.from({ length: 20 }).map((_, i) => (
            <MessageBubble sender={i % 2 == 0} />
          ))}
        </CardContent>
        <CardFooter className="w-full">
          <Form className="flex flex-row items-center relative w-full">
            <input
              type="text"
              placeholder="Type a message..."
              className="border-1 w-full h-8 rounded-2xl px-2 text-xs"
            />
            <Button className="flex flex-row justify-center items-center w-6 h-6 absolute right-2">
              <SendIcon />
            </Button>
          </Form>
        </CardFooter>
      </Card>
    </div>
  );
}
