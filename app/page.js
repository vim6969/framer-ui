import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      <div className="main-layout flex">
        <div className="ui-example-column">
          <p className="border-b pl-4">ui exmaple column</p>
        </div>
        <div className="rendered-ui-column">
          <p className="border-b pl-4">ui render column</p>
        </div>
      </div>

    </main>
    </>
  );
}
