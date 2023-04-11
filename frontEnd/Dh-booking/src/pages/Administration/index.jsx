import './style.sass'
import './responsive.sass'
import { apiUrl } from '../../mainApi'
import { useEffect, useState } from 'react'


export function AdministrationPanel(){
  const [caracteristics, setCaractetistics] = useState([])
  const [categorys, setCategorys] = useState([])
  const [citys, setCitys] = useState([])
  const [accommodations, setAccommodations] = useState([])

  const [nameAccommodation, setNameAccommodation] = useState('')
  const [selectQualification, setSelectQualification] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [selectCategory, setSelectCategory] = useState('')

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
    fetch(`${apiUrl}api/hospedagem`)
    .then(res => {
      res.json()
      .then(data => {
        setAccommodations(data)
      })
    })

  }, [])


  const formsAccommodation = (event) => {
    event.preventDefault()
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

    console.log(accommodation)

    const requestHeaders = {
      'Content-Type': 'application/json'
    }
    const requestConfig = {
        method: 'POST',
        body: JSON.stringify(accommodation),
        headers: requestHeaders,
    }

    console.log(requestConfig)

    if(nameAccommodation.length !== '' && selectQualification !== '' && selectCity !== '' && selectCategory !== ''){
      fetch(`${apiUrl}api/hospedagem`, requestConfig)
            .then(res =>{
                console.log(res)
                if(res.ok){
                  console.log('ok')
                }else{
                    console.timeLog('erro na api')
                }
            })
    }else {
      console.log('dados em branco')
    }

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
            />
          </div>
          <div className="input-qualification-accommodation">
            <label htmlFor="">Qualificação da hospedagem</label>
            <select name="" id="" onChange={(event) => setSelectQualification(event.target.value)} onSubmit={formsAccommodation}>
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
            <select name="" id="" onChange={(event) => setSelectCategory(event.target.value)}>
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
            <select name="" id="" onChange={(event) => setSelectCity(event.target.value)}>
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
          <div className="input-rules">
            <label htmlFor="">Regras da acomodação</label>
            <div className="input">
              <input type="text" />
              <button>+</button>
            </div>
          </div>
          <div className="input-security">
            <label htmlFor="">Saúde e Segurança</label>
            <div className="input">
              <input type="text" />
              <button>+</button>
            </div>
          </div>
          <div className="input-policie-cancellation">
            <label htmlFor="">Políticas de Cancelamento</label>
            <div className="input">
              <input type="text" />
              <button>+</button>
            </div>
          </div>
          <button className='submit-policies'>Cadastrar Políticas</button>
        </form>
      </div>
      <div className="container-create-image">
        <h2>Adicionar Imagens</h2>
        <form action="">
          <div className="input-urlImg-add">
              <label htmlFor="">Cole a Url da imagem</label>
              <div className="urlImg-product">
                <input type="text" placeholder='htttp://urlImagem'/>
                <button>+</button>
              </div>
            </div>
        </form>
      </div>
      <div className="container-create-product">
        <h2>Crie um novo produto</h2>
        <form action="">
          <div className="input-name-product">
            <label htmlFor="">Nome do produto</label>
            <input type="text" />
          </div>
          <div className="input-description-product">
            <label htmlFor="">Descrição do produto</label>
            <input type="text" />
          </div>
          <div className="input-select-accommodation">
            <label htmlFor="">Escolha a hospedagem que você criou</label>
            <select name="" id="">
              {
                accommodations.map((accommodation, index) => (
                  <option value="">{accommodation.name}</option>
                ))
              }
            </select>
          </div>
          <div className="input-select-policies">
            <label htmlFor="">Escolha as Políticas que você criou</label>
            <select name="" id="">
              <option value="">Políticas</option>
            </select>
          </div>
          <div className="input-caracteristic-product">
            <label htmlFor="">Selecione as características do produto</label>
            <div className="checkbox-caracteristic">
              {
                caracteristics.map((caracteristic, index) => (
                  <div className='checkbox' key={index}>
                    <span htmlFor="">{caracteristic.description}</span>
                    <input
                      type="checkbox"
                      id={caracteristic.description}
                      caracteristic={caracteristic.description}
                      value={caracteristic.description}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="input-urlImg-product">
            <label htmlFor="">Escolha as imagens para o produto</label>
            <div className="urlImg-product">
              <select name="" id="">
                <option value="">Produto</option>
              </select>
              <button>+</button>
            </div>
          </div>
          <button className='submit-product'>Cadastrar produto</button>
        </form>
      </div>
    </div>
  )
}
