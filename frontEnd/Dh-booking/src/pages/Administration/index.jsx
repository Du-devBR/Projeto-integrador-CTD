import './style.sass'
import './responsive.sass'
import { apiUrl } from '../../mainApi'
import { useEffect, useRef, useState } from 'react'
import { sweetAlertSuccess } from '../../hooks/sweetAlert'


export function AdministrationPanel(){
  const [caracteristics, setCaractetistics] = useState([])
  const [categorys, setCategorys] = useState([])
  const [citys, setCitys] = useState([])
  const [accommodations, setAccommodations] = useState([])
  const [regulations, setRegulations] = useState([])
  const [imagens, setImagens] = useState([])

  const [nameAccommodation, setNameAccommodation] = useState('')
  const [nameProduct, setNameProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const [priceProduct, setpriceProduct] = useState('')
  const [selectQualification, setSelectQualification] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [selectCategory, setSelectCategory] = useState('')
  const [selectAccommodation, setSelectAccommodation] = useState('')
  const [selectAccommodationProduct, setSelectAccommodationProduct] = useState('')
  const [selectImage, setSelectImage] = useState('')
  const [selectCaracteristic, setSelectCaracteristic] = useState('')
  const [rulesHome, setRulesHome] = useState([])
  const [inputRuleHome, setInputRuleHome] = useState('')
  const [rulesHealth, setRulesHealth] = useState([])
  const [inputRuleHealth, setInputRuleHealth] = useState('')
  const [rulesSecurity, setRulesSecurity] = useState([])
  const [inputRuleSecurity, setInputRuleSecurity] = useState('')

  const [listCaracteristic, setListCaracteristic] = useState([])
  const [listImagens, setListImagens] = useState([])
  const [listImagensDescription, setListImagensDescription] = useState([])
  const [listCaracteristicDescription, setListCaracteristicDescription] = useState([])
  const [inputUrlImage, setInputUrlImage] = useState('')
  const [inputDescriptionImage, setInputDescriptionImage] = useState('')
  const selectRefImg = useRef()
  const selectRefCaracteristic = useRef()


  useEffect(() => {
    fetch(`${apiUrl}api/categoria`)
    .then(res => {
      res.json()
      .then(data => {
        setCategorys(data)
      })
    })

  }, [])

  useEffect(() => {
    fetch(`${apiUrl}api/caracteristica`)
    .then(res => {
      res.json()
      .then(data => {
        setCaractetistics(data)
      })
    })

  }, [])

  useEffect(() => {
    fetch(`${apiUrl}api/cidade`)
    .then(res => {
      res.json()
      .then(data => {
        setCitys(data)
      })
    })

  }, [])

  useEffect(() => {
    updateAccommodation()
  }, [])

  useEffect(() => {
    updateRegulamentation()
  }, [])

  useEffect(() => {
    updateImagens()
  }, [])

  const updateAccommodation = () => {
    fetch(`${apiUrl}api/hospedagem`)
    .then(res => {
      res.json()
      .then(data => {
        setAccommodations(data)
      })
    })
  }

  const updateImagens = () => {
    fetch(`${apiUrl}api/imagem`)
    .then(res => {
      res.json()
      .then(data => {
        console.log(data)
        setImagens(data)
      })
    })
  }

  const updateRegulamentation = () => {
    fetch(`${apiUrl}api/regulamentacao`)
    .then(res => {
      res.json()
      .then(data => {
        console.log(data)
        sweetAlertSuccess('Regras criadas')
        setRegulations(data)
      })
    })
  }

  const formsAccommodation = (event) => {
    event.preventDefault()
    const localStorageUser = JSON.parse(localStorage.getItem("dados"))
    const accommodation = {
      name: nameAccommodation,
      qualification: selectQualification,
      city:{
        id: parseInt(selectCity)
      },
      category:{
        id: parseInt(selectCategory)
      },
    }
    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorageUser.token}`
    }
    const requestConfig = {
        method: 'POST',
        body: JSON.stringify(accommodation),
        headers: requestHeaders,
    }

    if(nameAccommodation.length !== '' && selectQualification !== '' && selectCity !== '' && selectCategory !== ''){
      fetch(`${apiUrl}api/hospedagem`, requestConfig)
            .then(res =>{
                console.log(res)
                if(res.ok){
                  console.log('ok')
                  sweetAlertSuccess('Nova Hospedagem cadastrada')
                  updateAccommodation()
                }else{
                    console.timeLog('erro na api')
                }
            })
    }else {
      console.log('dados em branco')
    }
    setSelectAccommodation('')
    setSelectCategory('')
    setNameAccommodation('')
    setSelectCity('')

  }

  const formsProduct = (event, index) => {
    event.preventDefault()
    const localStorageUser = JSON.parse(localStorage.getItem("dados"))
    const product = {
      name: nameProduct,
      price: priceProduct,
      description: descriptionProduct,
      image: listImagens.map((img, index) => ({id: img})),
      caracteristic: listCaracteristic.map((caract, index) => ({id: caract})),
      accommodation: {
        id: selectAccommodationProduct
      }
    }
    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorageUser.token}`
    }
    const requestConfig = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: requestHeaders,
    }

      fetch(`${apiUrl}api/produto`, requestConfig)
        .then(res =>{
          console.log(res)
          if(res.ok){
            console.log('ok')
            sweetAlertSuccess('Novo Produto Cadastrado')
          }else{
            console.timeLog('erro na api')
          }
      })
  }

  const submitRulesHome = (event) => {
    event.preventDefault()
    setRulesHome([...rulesHome, inputRuleHome])
    setInputRuleHome('')
  }

  const removedRuleHome = (event, index) => {
    event.preventDefault()
    const getRulesHome = [...rulesHome]
    getRulesHome.splice(index, 1)
    setRulesHome(getRulesHome)
  }

  const submitRulesHealth = (event) => {
    event.preventDefault()
    setRulesHealth([...rulesHealth, inputRuleHealth])
    setInputRuleHealth('')
  }

  const removedRuleHealth = (event, index) => {
    event.preventDefault()
    const getRulesHealth = [...rulesHealth]
    getRulesHealth.splice(index, 1)
    setRulesHealth(getRulesHealth)
  }

  const submitRulesSecurity = (event) => {
    event.preventDefault()
    setRulesSecurity([...rulesSecurity, inputRuleSecurity])
    setInputRuleSecurity('')
  }

  const removedRuleSecurity = (event, index) => {
    event.preventDefault()
    const getRulesSecurity = [...rulesSecurity]
    getRulesSecurity.splice(index, 1)
    setRulesSecurity(getRulesSecurity)
  }

  const submitImageProduct = (event) => {
    event.preventDefault()
    const selectImageInt = parseInt(selectImage)
    const selectedIndex = selectRefImg.current.selectedIndex
    const selectedOption = selectRefImg.current.options[selectedIndex];
    const optionDescription = selectedOption.text;
    setListImagens([...listImagens, selectImageInt])
    setListImagensDescription([...listImagensDescription, optionDescription])
    setSelectImage('')
  }

  const removedImageList = (event, index) => {
    event.preventDefault()
    const getImageList = [...listImagensDescription]
    getImageList.splice(index, 1)
    setListImagensDescription(getImageList)
    console.log(index)
  }

  const submitCaracteristicProduct = (event) => {
    event.preventDefault()
    const selectCaracteristicInt = parseInt(selectCaracteristic)
    const selectedIndex = selectRefCaracteristic.current.selectedIndex
    const selectedOption = selectRefCaracteristic.current.options[selectedIndex];
    const optionDescription = selectedOption.text;
    setListCaracteristic([...listCaracteristic, selectCaracteristicInt])
    setListCaracteristicDescription([...listCaracteristicDescription, optionDescription])
    setSelectCaracteristic('')
  }

  const removedCaracteristicList = (event, index) => {
    event.preventDefault()
    const getCaracteriticList = [...listCaracteristicDescription]
    getCaracteriticList.splice(index, 1)
    setListCaracteristicDescription(getCaracteriticList)
    console.log(index)
  }

  const sumitNewImage = (event) => {
    event.preventDefault()
    const localStorageUser = JSON.parse(localStorage.getItem("dados"))
    const dataImage = {
      description: inputDescriptionImage,
      url: inputUrlImage
    }
    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorageUser.token}`
    }
    const requestConfig = {
        method: 'POST',
        body: JSON.stringify(dataImage),
        headers: requestHeaders,
    }

    fetch(`${apiUrl}api/imagem`, requestConfig)
      .then(res =>{
        console.log(res)
        if(res.ok){
          console.log('ok')
          sweetAlertSuccess('Imagem salva')
          updateImagens()
        }else{
            console.timeLog('erro na api')
        }
      })
    setInputDescriptionImage('')
    setInputUrlImage('')
  }

  const formsPolicies = (event) =>{
    event.preventDefault()
    const localStorageUser = JSON.parse(localStorage.getItem("dados"))
    const policies = {
      regrasSaude: rulesHealth,
      regrasCasa: rulesHome,
      regrasCancelamento: rulesSecurity,
      accommodation: [{
        id: selectAccommodation
      }]
    }
    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorageUser.token}`
    }
    const requestConfig = {
        method: 'POST',
        body: JSON.stringify(policies),
        headers: requestHeaders,
    }

    fetch(`${apiUrl}api/regulamentacao`, requestConfig)
            .then(res =>{
                console.log(res)
                if(res.ok){
                  console.log('ok')
                  updateRegulamentation()
                }else{
                    console.timeLog('erro na api')
                }
            })
  }

  return(
    <div className="container-administration">
      <div className="title-administration">
        <h1>Gerenciamento de produtos</h1>
      </div>
      <div className="container-crete-accommodation">
        <h2>Criar nova Hospedagem</h2>
        <form action="" onSubmit={formsAccommodation}>
          <div className="input-name-accommodation">
            <label htmlFor="">Nome da Hospedagem</label>
            <input
              type="text"
              placeholder='Digite o titulo da hospedagem'
              onChange={(event) => setNameAccommodation(event.target.value)}
              value={nameAccommodation}
            />
          </div>
          <div className="input-qualification-accommodation">
            <label htmlFor="">Qualificação da hospedagem</label>
            <select name="" id="" onChange={(event) => setSelectQualification(event.target.value)} onSubmit={formsAccommodation} value={selectQualification}>
              <option value="">Selecione uma qualificação</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="input-category-accommodation">
            <label htmlFor="">Categoria da Hospedagem</label>
            <select name="" id="" onChange={(event) => setSelectCategory(event.target.value)} value={selectCategory}>
              <option value="">Escolha uma categoria</option>
              {
                categorys.map((category, index) => (
                  <option value={category.id}>{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className="input-city-accommodation">
            <label htmlFor="">Cidade da Hospedagem</label>
            <select name="" id="" onChange={(event) => setSelectCity(event.target.value)} value={selectCity}>
              <option value="">Escolha uma cidade</option>
              {
                citys.map((city, index) => (
                  <option value={city.id}>{city.name}</option>
                ))
              }
            </select>
          </div>
          <button className='submit-accommodation'>Cadastrar Hospedagem</button>
        </form>
      </div>
      <div className="container-create-policies">
        <h2>Criar políticas</h2>
        <form action="">
          <div className="select-accommodation">
            <label htmlFor="">Hospedagem</label>
            <select name="" id="" onChange={(event) => setSelectAccommodation(event.target.value)}>
              <option value="">Escolha uma hospedagem para cadastrar regras</option>
              {
                accommodations.map((accommodation, index) => (
                  <option value={accommodation.id}>{accommodation.name}</option>
                ))
              }
            </select>
          </div>
          <div className="input-rules">
            <label htmlFor="">Regras da acomodação</label>
            <div className="input">
              <input type="text" value={inputRuleHome} onChange={event => setInputRuleHome(event.target.value)} />
              <button onClick={event => submitRulesHome(event)}>+</button>
            </div>
            <ul className='list-rules'>
              {
                rulesHome.map((rules, index) => (
                  <div className="rules">
                    <li className='name-rule'>{rules}</li>
                    <button
                      className='removed-rule'
                      onClick={event => removedRuleHome(event, index)}>X</button>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className="input-security">
            <label htmlFor="">Saúde e Segurança</label>
            <div className="input">
              <input type="text" value={inputRuleHealth} onChange={event => setInputRuleHealth(event.target.value)} />
              <button onClick={event => submitRulesHealth(event)}>+</button>
            </div>
            <ul className='list-rules'>
              {
                rulesHealth.map((rules, index) => (
                  <div className="rules">
                    <li className='name-rule'>{rules}</li>
                    <button
                      className='removed-rule'
                      onClick={event => removedRuleHealth(event, index)}>X</button>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className="input-policie-cancellation">
            <label htmlFor="">Políticas de Cancelamento</label>
            <div className="input">
              <input type="text"value={inputRuleSecurity} onChange={event => setInputRuleSecurity(event.target.value)} />
              <button onClick={event => submitRulesSecurity(event)}>+</button>
            </div>
            <ul className='list-rules'>
              {
                rulesSecurity.map((rules, index) => (
                  <div className="rules">
                    <li className='name-rule'>{rules}</li>
                    <button
                      className='removed-rule'
                      onClick={event => removedRuleSecurity(event, index)}>X</button>
                  </div>
                ))
              }
            </ul>
          </div>
          <button className='submit-policies' onClick={formsPolicies}>Cadastrar Políticas</button>
        </form>
      </div>
      <div className="container-create-image">
        <h2>Adicionar Imagens</h2>
        <form action="">
          <div className="input-urlImg-add">
              <label htmlFor="">Cole a Url da imagem</label>
              <div className="urlImg-product">
                <input type="text" placeholder='htttp://urlImagem' value={inputUrlImage} onChange={(event) => setInputUrlImage(event.target.value)}/>
                <input type="text" className='decription-image' placeholder='Nome da imagem' value={inputDescriptionImage} onChange={(event) => setInputDescriptionImage(event.target.value)}/>
              </div>
            </div>
            <button className='submit-image' onClick={event => sumitNewImage(event)}>Cadastrar Imagens</button>
        </form>
      </div>
      <div className="container-create-product">
        <h2>Crie um novo produto</h2>
        <form action="" onSubmit={formsProduct}>
          <div className="input-name-product">
            <label htmlFor="">Nome do produto</label>
            <input type="text" onChange={event => setNameProduct(event.target.value)}/>
          </div>
          <div className="input-description-product">
            <label htmlFor="">Descrição do produto</label>
            <input type="text" onChange={event => setDescriptionProduct(event.target.value)}/>
          </div>
          <div className="input-select-accommodation">
            <label htmlFor="">Escolha a hospedagem que você criou</label>
            <select name="" id="" onChange={event => setSelectAccommodationProduct(event.target.value)}>
              <option value=""></option>
              {
                accommodations.map((accommodation, index) => (
                  <option value={accommodation.id}>{accommodation.name}</option>
                ))
              }
            </select>
          </div>
          <div className="input-select-policies">
            <label htmlFor="">Escolha as Políticas que você criou</label>
            <select name="" id="">
              <option value=""></option>
              {
                regulations.map((regulation, index) => (
                  <option value={regulation.id}>{regulation.accommodation[0].name}</option>
                ))
              }
            </select>
          </div>
          <div className="input-caracteristic-product">
            <label htmlFor="">Selecione as características do produto</label>
            <div className="checkbox-caracteristic">
              <select name="" id="" value={selectCaracteristic} onChange={event => setSelectCaracteristic(event.target.value)} ref={selectRefCaracteristic}>
                <option value=""></option>
                  {
                    caracteristics.map((caracteristic, index) => (
                      <option value={caracteristic.id}>{caracteristic.description}</option>
                    ))
                  }
              </select>
              <button onClick={event => submitCaracteristicProduct(event)}>+</button>
            </div>
            <ul className='list-caracteristic'>
              {
                listCaracteristicDescription.map((list, index) => (
                  <div className="caracteristic">
                    <li className='name-caracteristic'>{list}</li>
                    <button
                      className='removed-caracteristic'
                      onClick={event => removedCaracteristicList(event, index)}>X</button>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className="input-urlImg-product">
            <label htmlFor="">Escolha as imagens para o produto</label>
            <div className="urlImg-product">
              <select name="" id="description" value={selectImage} onChange={event => setSelectImage(event.target.value)} ref={selectRefImg}>
                <option value=""></option>
                {
                  imagens.map((image, index) => (
                    <option value={image.id}>{image.description}</option>
                  ))
                }
              </select>
              <button onClick={event => submitImageProduct(event)}>+</button>
            </div>
            <ul className='list-imagens'>
              {
                listImagensDescription.map((list, index) => (
                  <div className="imagens">
                    <li className='name-imagens'>{list}</li>
                    <button
                      className='removed-imagens'
                      onClick={event => removedImageList(event, index)}>X</button>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className="price-product">
            <div className="price">
              <label htmlFor="">Digite o valor para esse produto</label>
              <input type="number" onChange={event => setpriceProduct(event.target.value)} />
            </div>
            <button className='submit-product'>Cadastrar produto</button>
          </div>
        </form>
      </div>
    </div>
  )
}
