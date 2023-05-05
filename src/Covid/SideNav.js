import { AiOutlineDashboard, AiOutlineInfoCircle, AiOutlineSafetyCertificate, AiOutlineHeart } from 'react-icons/ai';

function SideNav() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar position-fixed">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <AiOutlineDashboard className='me-2' />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineInfoCircle className='me-2' />
                  State Wise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineSafetyCertificate  className='me-2' />
                  Do's And Dont's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineHeart className='me-2' />
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-10 offset-md-2 mainheadernav" >
  <div className="container">
    <h1>Covid-19 Dashboard</h1>
    <div className="d-flex justify-content-between">
      <a href="#" className="btn btn-primary">Test center</a>
      <a href="#" className="btn btn-primary">Vaccination centre</a>
      <a href="#" className="btn btn-primary">Quarantine facilities</a>
    </div>
  </div>
</main>

      </div>
    </div>
  );
}

export default SideNav;
