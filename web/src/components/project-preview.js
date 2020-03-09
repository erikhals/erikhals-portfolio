import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProjectPreview (props) {
  console.log(props)
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={props.left ? styles.leadMediaThumb : styles.leadMediaThumbRight}>
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
      </div>
      <div className={props.left ? styles.skillBlockRight : styles.skillBlockLeft}>{props.skills.map(skill => <div>{skill.title}</div>)}</div>
      <div className={props.left ? styles.titleBlockLeft : styles.titleBlockRight}><h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props.forClient && (
          <div className={styles.excerpt}>{props.forClient}</div>
        )}
      </div>
    </Link>
  )
}

export default ProjectPreview
