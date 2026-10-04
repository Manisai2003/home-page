import { HELPLINE, HELPLINE_HREF } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-crimson text-sm text-white">
      <div className="wrap flex justify-end py-2">
        <a href={HELPLINE_HREF} className="font-semibold hover:underline">
          Admission helpline no. {HELPLINE}
        </a>
      </div>
    </div>
  );
}
