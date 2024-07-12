import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Create a set of questions" },
    { name: "description", content: "Create a set of questions or quiz" },
  ];
};

export default function CreateVoiceOver() {
  return <h1 className="text-20 font-bold text-black">CreateVoice</h1>;
}