import { Button } from "./components/ui/button";
import { CardWithForm } from "./components/ui/demo/CardWithForm";
import { BreadcrumbDemo } from "./components/ui/demo/BreadcrumbDemo";
import Theme from "./components/ui/demo/theme";
import { TableDemo } from "./components/ui/demo/TableDemo";

function App() {
  return (
    <>
      <div className="p-28 flex items-center gap-4">
        <Theme />
        <Button>Hello Sir</Button>
      </div>
      <div className="p-28">
        <BreadcrumbDemo />
        <TableDemo></TableDemo>
      </div>
      <CardWithForm />
    </>
  );
}

export default App;
