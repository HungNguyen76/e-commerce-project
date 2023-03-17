import styled from 'styled-components';

const Wrapper = styled.nav`
  .header-top {
    .svg-top {
      padding: 0 50px;
    }
    .svg-top:hover {
      opacity: 50%;
      cursor: pointer;
    }
    background-color: #f5f5f5;
    height: 2rem;
    align-items: center;
    font-size: small;
    .separator-top-menu {
      opacity: 70%;
      margin: 2px;
    }
    ul {
      div {
        margin: 0 12px;
        padding: 0;
      }
      li {
        margin: 0 12px;
        padding: 0;
      }
      li:hover {
        border-bottom: transparent solid;
        opacity: 50%;
        cursor: pointer;
      }
    }
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
