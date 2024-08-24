import Tab from './Components/Tab/Tab';
import './App.css'

function App() {
  const tabs = [
    { id: 1 , label: 'Tab 1',title : "Tab 1", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium perferendis omnis harum adipisci autem obcaecati tempore, molestiae soluta debitis. Doloremque, accusamus quia delectus sed in consequatur ut ex at deleniti." },
    { id: 2 , label: 'Tab 2',title : "Tab 2", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, consequatur sit. Ipsum molestias cupiditate iusto dolor accusamus voluptas inventore recusandae vero incidunt, perspiciatis doloribus ad, illum assumenda nesciunt dolorum. Dolorem, at? Adipisci quisquam, unde, dolor dolorem iusto amet nobis molestias, dignissimos quam laboriosam illum nihil itaque tempora saepe a sit!" },
    { id: 3 , label: 'Tab 3',title : "Tab 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quis explicabo vero ratione similique recusandae?" },
    { id: 4 , label: 'Tab 4',title : "Tab 4", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos obcaecati molestias unde et inventore distinctio excepturi, qui a optio neque ducimus vero accusantium ullam, reprehenderit asperiores quisquam cum. Incidunt minima aspernatur excepturi molestias voluptatum cupiditate." },
  ];

  return (
    <>
    <Tab tabs={tabs} />
    </>
  )
}
export default App
