import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Castaly",
  description:
    "Aspiring scientist in physics and emerging technologies.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
