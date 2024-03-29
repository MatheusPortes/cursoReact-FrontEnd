import { ReactButton } from '../../Components/ReactButton/ReactButton'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'
import { useListGlobalProdutos } from '../../ReactContext/ContextGlobal'
import './Produtos.css'

export function ProdutosAula7() {
    const { listGlobalProdutos, setListGlobalProdutos } =
        useListGlobalProdutos()

    return (
        <div>
            <Title text="Funções Globais - Listagem de Produtos" type='h1' />
            <div className="box">
                <ul className="box-ul">
                    {listGlobalProdutos &&
                        listGlobalProdutos.map(({ nome, descricao }, index) => (
                            <div key={index} className="box-ul-box">
                                <li className="box-ul-box-li">{nome}</li>
                                <span>{descricao}</span>
                            </div>
                        ))}
                </ul>
                <div className="box-button">
                    <a
                        href={`http://localhost:${process.env.REACT_APP_PORT}/aula/atividade-7`}
                    >
                        <ReactButton title="Refresh" className='box-ul-box' />
                    </a>
                    <ReactButton
                        className='box-ul-box'
                        title="Limpar"
                        onClick={() => {
                            setListGlobalProdutos(null)
                        }}
                    />
                </div>
            </div>
            <ReactSpan content="aula - 7" />
        </div>
    )
}
