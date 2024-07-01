import React from "react";
import Foot from "../views/global/Foot";
import DataList from "../views/local/DataList";
export default class Plan extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <DataList viewType={'расход'} data={this.props.statData} />
                <Foot></Foot>
            </>
        )
    }
}








// const Plan = () => {

//     const [time, setTime] = useState();

//     useEffect(() => {

//         setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

//     }, [])

//     return(
//         <React.Fragment>
//             <span style={{marginTop: '100px', marginLeft: '130px', display: 'block'}}>Страница планирования</span>
//             <span style={{marginTop: '100px', marginLeft: '130px', display: 'block'}}>Текущее время - { time }</span>
//         </React.Fragment>
//     );
// };

// export default Plan;

// shouldComponentUpdate() {
//     // return false - если не нужно обновлять компонент
// }

// componentDidUpdate(prevProps, prevState) {
//     // выполнение запросов к серверу
//     // менять стейт в этом методе нельзя
// }

// componentDidMount() {
//     // выполнение запросов к серверу
//     // менять стейт в этом методе нельзя
// }

// componentWillUnmount() {
//     // метод для очистки памяти
// }