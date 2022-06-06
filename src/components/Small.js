import { memo } from 'react'

const Small = memo(({value}) =>
 {
    console.log("me volvi a llamar")
    return (
        <div>
            {value}
        </div>
    )
}
)
export default Small;

