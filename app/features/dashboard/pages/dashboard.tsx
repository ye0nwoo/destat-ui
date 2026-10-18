import { supabase } from "~/postgres/supaclient";

// before rendering Home react compoment
export async function loader() {
  const { data } = await supabase().from("destat-test").select("*");
  console.log(data);
}

export default function Home() {
  return <div>Hello destat world</div>;
}
