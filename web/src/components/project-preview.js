import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProjectPreview (props) {
  return (
    <div className={styles.root} >
      <Link className={props.left ? styles.leadMediaThumb : styles.leadMediaThumbRight} to={`/project/${props.slug.current}`}>
        {props.mainImage &&
          props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor(9 / 16 * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </Link>
      <Link className={props.left ? styles.titleBlockLeft : styles.titleBlockRight} to={`/project/${props.slug.current}`}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props.forClient && (
          <div className={styles.excerpt}>{props.forClient}</div>
        )}
      </Link>

      <div className={props.left ? styles.skillBlockRight : styles.skillBlockLeft}>
        {props.skills.map(skill => <div key={skill.title}>{skill.title}</div>)}
      </div>
      <div className={props.left ? styles.softwareBlockRight : styles.softwareBlockLeft}>{props.softwares && props.softwares.map(software => (
        <img key={software.title} src={software.logo.asset.fluid.src} alt={software.title} />))}
      </div>

    </div>
  )
}

export default ProjectPreview
