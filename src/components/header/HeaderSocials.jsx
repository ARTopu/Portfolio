import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/atiqur-rahman-b38b621b1/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/ARTopu' target='_blank'><FaGithub /></a>
        <a href='https://www.facebook.com/topu.rahman.5623' target='_blank'><BsFacebook /></a>
    </div>
  )
}
export default HeaderSocials