import { ChangeEvent, useState } from "react";
import { CreatePlan } from '../../../api/plan';
import * as C from './styles'
import * as Toast from '@radix-ui/react-toast';
import { CrossCircledIcon } from '@radix-ui/react-icons'

interface PlanInterface {
    AG_18: string;
    AG_23: string;
    AG_28: string;
    AG_33: string;
    AG_38: string;
    AG_43: string;
    AG_48: string;
    AG_53: string;
    AG_58: string;
    AG_59: string;
    CITY: string;
    ACCOMMODATION: string;
    MIN_PEOPLE: string;
    NAME: string;
    OPERATOR_ID: string;
    STATE: string;
    TAG: string;
    TYPE: string;
}

interface PlansInterface extends Array<PlanInterface>{}

export function PlanCsv() {
  const [array, setArray] = useState<PlansInterface>([]);
  const [open, setOpen] = useState(false)

  const fileReader = new FileReader();

  const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
        fileReader.onload = function (event:any) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(e.target.files[0]);
    }
  };

  const csvFileToArray = (string:string) => {
    
    let csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    csvHeader[17] = csvHeader[17].replace("\r",'')
    let csvRows = string.slice(string.indexOf("\n") + 1).split(/\r\n|\n/);
    
    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object:any, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    setArray(array);
  };

  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    CreatePlan(array)
    .then(res => {
      console.log(res)
    })

  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <C.Container style={{ textAlign: "center" }}>
      <h1>Import Csv </h1>
      <form>
        <input
          className="file-input"
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key,i) => (
              <th key={"th"+i}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item:any,i) => (
            <tr key={i}>
              {Object.values(item).map((val,i) => (
                <td key={"td"+i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Planos criados com sucesso</Toast.Title> 
                <Toast.Description className="ToastDescription"></Toast.Description>
                <Toast.Close><CrossCircledIcon/></Toast.Close> 
            </Toast.Root>

            <Toast.Viewport  className="ToastViewport"/>
        </Toast.Provider>

    </C.Container>
  );
}
