import { useTranslations } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";
import { Header } from "@/components/layout-template/Header";
import { HeaderMobile } from "@/components/layout-template/HeaderMobile";

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");
  return (
    <div className="">
      <div className="pc-version">
        <Header />
      </div>
      <div className="mobile-version">
        <HeaderMobile />
      </div>
      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.name}.
        {` ${t("made_with")} `}
        <a
          href="https://creativedesignsguru.com"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          CreativeDesignsGuru
        </a>
      </footer>
    </div>
  );
};

export { BaseTemplate };
