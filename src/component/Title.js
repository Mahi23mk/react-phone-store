import React from "react"

export default function Title({name}) {
    return(
      <div className="row">
        <div className="col-10 mx-auto my-auto text-center text-title">
        <h3><strong>{name}</strong></h3>

        </div>
      </div>
    )

}
