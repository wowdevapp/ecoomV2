import React from "react";
import {Link} from 'react-router-dom';
export default function Error() {
  return <section>
             <h1>hello form error page</h1>
             <Link to='/' className='btn btn-primary'>
                back-home
             </Link>
         </section>;
}
