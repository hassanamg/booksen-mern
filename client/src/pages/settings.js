
import Styles from './settings.module.css'
import AccountSettings from '../components/Account/settings'
import ManageBooks from '../components/Account/manageBooks'
import { useState } from 'react'
const Settings = () => {


    const [showSettings, setShowSettings] = useState(true)
    const [showWishlist, setShowWishlist] = useState(false)
    const [showBooks, setShowBooks] = useState(false)
    function showSettingsContent(e)  {

      e.preventDefault()
       setShowBooks(false)
      setShowSettings(true)
      setShowWishlist(false)
    }
     function showManageBooksContent(e)  {

      e.preventDefault()
      setShowBooks(true)
      setShowSettings(false)
      setShowWishlist(false)
    }
   function manageBooksHandler(e) {

      e.preventDefault()
       setShowWishlist(true)
    }
    return (
    
     <main>
      <div className={Styles["user-view"]}>
          <nav className={Styles["user-view__menu"]}>
             <ul className={Styles["side-nav"]}>
                <li class="side-nav--active">
                   <a href="/" onClick={showSettingsContent}>
                      {<svg className={`${Styles["svg-inline--fa"]} ${Styles["fa-gear"]}`}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z">
                        </path>
                      </svg> }
                          {/* <i class="fa-solid fa-gear"></i> */}
                          Settings
                    </a>
                  </li>
                  <li>
                    <a href="/" onClick={showManageBooksContent}>
                      <svg className={`${Styles["svg-inline--fa"]} ${Styles["fa-gear"]}`}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"></path></svg>
                        <i class="fa-solid fa-book"></i>
                        Manage Books
                     </a>
                    </li>
                    <li>
                      <a href="/wishlist">
                       <svg className={`${Styles["svg-inline--fa"]}  ${Styles["fa-clipboard-list"]}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard-list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"></path></svg> 
                      <i class="fa-solid fa-clipboard-list"></i>
                      My wishlist
                    </a>
                  </li>
              </ul>
           </nav>
          { showSettings? <AccountSettings /> : "" }
          {showBooks? <ManageBooks /> : ""}
          {/* {manageBooks == "manage" ? <ManageBooks /> : <AccountSettings/>} */}
          </div>
      </main>
    )
}
export default Settings