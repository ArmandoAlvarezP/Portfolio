import { Presentacion } from "../components/Presentacion";

export const Principal = () => {
  return (
    <div className="flex flex-col sm:flex-row">
        <div className="w-1/2">
            <Presentacion />
        </div>
        <div className="sm:w-1/2 w-full">
            <img src="/images/matrix.png" alt="matrix"/>
        </div>
    </div>
  )
}