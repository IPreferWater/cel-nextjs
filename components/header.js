import Link from 'next/link'
import { Logo } from '@components/icons/logo'

  export default  class Header extends React.Component {

    state = {isExpanded: false};

    handleClick = e => {
      e.preventDefault();
      this.setState(prevState => ({
        isExpanded: !prevState.isExpanded
      }))
    };

  render() {
  return (
    <header >
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-8">
        <Link href="/">
        <a>
        <Logo className="sm-max:w-48  w-64" />
        </a>
        </Link>

        <nav
          className={ ` font-railey text-3xl ${
            this.state.isExpanded ? `` : `hidden md:contents`
          } flex flex-col md:flex-row justify-between text-cel-orange font-extrabold w-2/3`}
        >
          {[
            {
              route: `/`,
              title: `Accueil`,
            },
            {
              route: `/blog`,
              title: `Slow Fashion`,
            },
            {
              route: `/about`,
              title: `Clementine`,
            },
            {
              route: `/presse`,
              title: `Presse`,
            }
          ].map((link) => (
            <Link
              key={link.title}
              href={link.route}
            >
              <a>{link.title}</a>
            </Link>
          ))}
        </nav>

         <button
          className="flex items-center block px-3 py-2 text-cel-orange border border-cel-orange rounded md:hidden"
          onClick={this.handleClick}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

      </div>
    </header>
  )};
          }