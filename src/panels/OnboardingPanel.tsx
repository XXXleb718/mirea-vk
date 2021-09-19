import { FC, useEffect } from "react";
import { CustomSelect, FormItem, Panel, PanelProps, Spinner } from "@vkontakte/vkui";
import { useState } from "react";

export const Onboarding: FC<PanelProps> = ({ id }) => {
  const [data, setData] = useState<Array<{label: string, value: string}>>();
  const [group, setGroup] = useState<string>("");

  useEffect(()=>{
    fetch("https://cors.roughs.ru/schedule.mirea.ninja:5000/api/schedule/groups")
    .then((data) => data.json())
    .then((data: { groups: Array<string>}) => {
      setData(data.groups.map((elem) => {
        return {label: elem, value: elem}
      }))
    })
    .catch(console.log)
  }, []);

  return <Panel id={id} centered>
    {data ? 
    <>
    <FormItem>
      <CustomSelect 
        searchable

      />
    </FormItem>
    </>
    : <Spinner size="medium"/>}
  </Panel>
}