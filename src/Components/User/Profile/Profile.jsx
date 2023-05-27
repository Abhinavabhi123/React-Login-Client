import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    
    <div className="wrapper">
      <div className="profile-card js-profile-card">
        <div className="profile-card__img">
          
          <img src="" alt="profile card" />
        </div>

        <div className="profile-card__cnt js-profile-cnt">
          <div className="profile-card__name"></div>
          <div className="profile-card__txt"><strong></strong></div>
          <div className="profile-card-loc">
          </div>
          <div className="profile-card-ctr">
            <button className="profile-card__button button--blue js-message-btn">Change</button>
            <button className="profile-card__button button--orange">Back</button>
          </div>
        </div>

      
          <div className="js-message active">
            <form className="profile-card-form" >
              <div className="profile-card-form__container">
                <div className='upload'>
                <img  src="" alt="" />
                <div className='round'>
                  <input type="file" name='image'/>
                  <i className='fa fa-camera' ></i>
                </div>
                </div>
                
              
              </div>

              <div className="profile-card-form__bottom">
                <button className="profile-card__button button--blue js-message-close" type='submit'>
                  Update
                </button>

                <button className="profile-card__button button--gray js-message-close" >
                  Cancel
                </button>
              </div>
            </form>

            <div className="profile-card__overlay js-message-close"></div>
          </div>
        )
      </div>
    </div>

  )
}

export default Profile
