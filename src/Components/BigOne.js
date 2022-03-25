import { BigPhoto, Link, One } from "./Commons/Components"

export const BigOne = ({image, name, description, url}) => {
    return(
        <>
            <One>
                <div>
                    <BigPhoto src={image} alt={name}/>
                </div>
                
                <div style={{width:"40%", display:"flex", flexDirection:"column"}}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <br/>
                    <div style={{height:"10%"}}>
                        <Link href={url} target="_blank">Watch</Link>
                    </div>
                </div>
            </One>
        </>
    )

}