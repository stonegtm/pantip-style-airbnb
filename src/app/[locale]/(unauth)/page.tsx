import { getTranslations } from "next-intl/server";
import { Highlight } from "@/components/homepage/Highlight";
import { Realtime } from "@/components/homepage/Realtime";
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Highlight />
        <Realtime />
      </div>
    </>
  );
};
export default Home;

// export default function Index(props: { params: { locale: string } }) {
//   unstable_setRequestLocale(props.params.locale);

//   return <></>;
// }
