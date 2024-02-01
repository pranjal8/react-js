import logo from "./logo.svg";
import "./App.css";
import CollapseTable from "./component/CollapseTable";
import FormValidation from "./component/FormValidation";
import TextEditor from "./component/TextEditor";
import DownloadPdf from "./component/DownloadPdf";
import NestedObject from "./component/NestedObject";
import ModalExample from "./component/Modal";
import { Grid } from "@mui/material";
import MultiselectDropdown from "./component/MultiselectDropdown";
import MyTable from "./component/MyTable";

function App() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="column"
      rowGap={2}
      p={1}
      mt={4}
    >
      {/* <CollapseTable/> */}
      {/* <TextEditor/> */}
      {/* <DownloadPdf/> */}
      {/* <NestedObject /> */}
      {/* <ModalExample/> */}

      <MultiselectDropdown/>
      <MyTable/>
      
      
    </Grid>
  );
}

export default App;
