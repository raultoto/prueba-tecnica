import React, { Fragment, useState } from "react"
const Form = () => {

  const flowMap = new Map<string,string[]>([
    ['Delivery',['Completo','Responde y atiende','Atiende']],
    ['Social Listening',['Clasifica y responde','Responde']],
    ['Mensajería',['Clasifica y responde','Responde']],
  ]);
  const autoReplyMap=new Map<string,string[]>([
    ['Responde y atiende',['Deshabilitado','Pedir datos y derivar','Manejo automático']],
    ['Responde',['Deshabilitado','Clasificación automática']],
  ]);

  const [state, setstate] = useState({
    company: '',
    companyType: '',
    flow:'',
    autoReply:''
  });
  const handleInputChange = (event: any) => {
    console.log(event.target.name);
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  let flowHtml = <div></div>;
  if (state.companyType!=='') {
    const list=flowMap.get(state.companyType);
    flowHtml = <div className="form-group mt-3">
      <label htmlFor="flowLabel">Flujo</label>
      <select className="form-control" id="flowLabel" name="flow" onChange={handleInputChange}>
        {list?.map((e)=><option>{e}</option>)}
      </select>
    </div>;
  }
  let autoReplyHtml = <div></div>;
  if (state.flow!=='') {
    const listAutoReply=autoReplyMap.get(state.flow);
    autoReplyHtml =listAutoReply!=undefined? <div className="form-group mt-3">
      <label htmlFor="autoReplyLabel">Auto respuesta</label>
      <select className="form-control" id="autoReplyLabel" name="autoReply" onChange={handleInputChange}>
        {listAutoReply?.map((e)=><option>{e}</option>)}
      </select>
    </div>:<div></div>;
  }
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="col-lg-6 offset-lg-3 ">
        <div className="form-group">
          <label htmlFor="companyName">Nombre de la empresa</label>
          <input type="text" className="form-control" id="companyName" placeholder="Ingrese el nombre" name="company" onChange={handleInputChange} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleFormControlSelect1">Tipo de empresa</label>
          <select className="form-control" id="exampleFormControlSelect1" name="companyType" onChange={handleInputChange}>
            <option>Delivery</option>
            <option>Social Listening</option>
            <option>Mensajería</option>
          </select>
        </div>
        {flowHtml}
        {autoReplyHtml}

        <button className="btn btn-primary mt-3" >Enviar</button>
      </form>
    </Fragment>
  );
}
export default Form;