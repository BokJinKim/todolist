import React from "react"
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";

function App() {

  const [inputs, setInputs] = React.useState({
    name: '',
    nickname: ''
  });
  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };

  const [radio, setRadio] = React.useState()

  const handleChangeRadio = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value)
  }

  const [checkedInputs, setCheckedInputs] = React.useState([]);

  const changeHandler = (e) => {
  
    console.log(e.target.id);
    if (e.target.checked) {
      setCheckedInputs([...checkedInputs, e.target.id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== e.target.id));
    }
  };


  return (
    <div>
      <h1>Theme!!!</h1>

      <h3>Input</h3>
      <div>
      <Input name="name" placeholder="이름" onChange={onChange} value={name} />
      <Input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <Button onClick={onReset}>초기화</Button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>

      <h3>Checkbox</h3>
      <Checkbox value="1" id="1" onChange={changeHandler} checked={checkedInputs.includes("1") ? true : false} />OPTION 1
      <Checkbox value="2" id="2" onChange={changeHandler} checked={checkedInputs.includes("2") ? true : false} />OPTION 2
    
      <h3>Radio</h3>
      <Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} />
      <Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} />

      <h3>Select</h3>
      <Select />

      <h3>Slider</h3>
      <Slider />

      <h3>Button</h3>
      <Button onClick={()=>{
        // console.log(text)
      }}>클릭</Button>
    </div>
  );
}

export default App;
