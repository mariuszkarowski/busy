import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';

const SignUp = () => (
  <div>
    <div className="SidebarBlock">
      <h3 className="SidebarBlock__title">
        <FormattedMessage id="new_to_busy" defaultMessage="New to ULOG?" />
      </h3>
      <a target="_top" rel="noopener noreferrer" href={process.env.SIGNUP_URL}>
        <button className="SidebarBlock__button">
          <FormattedMessage id="signup" defaultMessage="Sign up" />
        </button>
      </a>
    </div>
 
    <div>
      <h5><center><a href="/@barbarossastudio/faq-polish-network">FAQ / O Nas</a> - <a href="/@barbarossastudio/nie-tylko-blogi">DMCA</a> - <a href="/@barbarossastudio/nie-tylko-blogi">Prywatnosc</a> - <a href="/@barbarossastudio/nie-tylko-blogi">Kontakt</a> </center>  </h5>
    </div>


  </div>
);

export default SignUp;
