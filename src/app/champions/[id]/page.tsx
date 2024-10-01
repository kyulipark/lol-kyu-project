type Props = {
   params:{
    id: number
   }
}

const ChampionDetailPage = ({params}:Props) => {
    return <>ID:{params.id} Page</>
}

export default ChampionDetailPage