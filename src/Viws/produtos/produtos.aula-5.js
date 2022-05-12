import React, { useState } from 'react'
import { Api } from '../../Controll/Controll'
//
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from  '../../Components/ReactButton/ReactButton'
//
import './produtos.css'

export default function ProdutosAula5() {

  const url1 = 'https://ranekapi.origamid.dev/json/api/produto/tablet'
  const url2 = 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
  const url3 = 'https://ranekapi.origamid.dev/json/api/produto/notebook'

  return (
    <div>
      <Title text="Produtos" />

      <ReactButton 
        eventOnclick={async () => {
          await Api(url1)
        }}
        title="tablet"
      />

      <ReactButton
        eventOnclick={async () => {
          await Api(url2)
        }}
        title="smartphone"
      />

      <ReactButton
        eventOnclick={async () => {
          await Api(url3)
        }}
        title="notebook"
      />

      <ReactSpan content='aula - 3'/>
    </div>
  )
}
