import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css'
import { nanoid } from 'nanoid';
import 'react-tabs/style/react-tabs.css';

function App() {
  const id = nanoid()
  console.log(id);
  return (
    <>
     <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </>
  )
}

export default App
