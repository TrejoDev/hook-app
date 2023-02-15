import { useFetch } from "../hook/useFetch"


export const MultipleCustomHook = () => {


    const { data, isLoading, hasError } = useFetch( 'https://api.breakingbadquotes.xyz/v1/quotes/2' );

   const { author, quote } = !!data && data[0]; //Si la data tiene valor para eso hacemos q sea false, entonces toma la data[0]. 
                                            //Queremos obtener un false de un null, cuando lo niega 1 vez ! es true y 2 veces !! es false.

    //console.log(data);
    

  return (
    <>
        <h1>BreakingBad Quotes</h1>  
        <hr />

        {
            ( isLoading )
                ?   (
                        <div className="alert alert-info text-center">
                            Loading... 
                        </div>
                    )
                    :(
                        <blockquote className="blockquote text-end"> 
                            <p className="mb-1"> { quote } </p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote> 
                    )
        }
        <button className="btn btn-primary">
            Next quote
        </button>
    </>
  )
}
