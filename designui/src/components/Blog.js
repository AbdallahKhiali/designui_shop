import React from 'react'
import "../style/blog.css"
function Blog() {
    return (
        <div className="blog" >
            <h1 className="blog_header">On the Blog </h1>
            <div className="blog_container" >
                <div className="blog_box" >
                    <img src={require('../assets/14.jpg').default} alt='blog_img' className="blog_box_img"  />
                    <h1 className="blog_box_header" >8 Calendriers Uniques pour des Décomptes Branchés</h1>
                    <p className="blog_box_description">
                    Une fois les chaussettes soigneusement accrochées à la cheminée, lancez le décompte des jours jusqu'à Noël avec l'un de ces calendriers de l'Avent originaux.
                    </p>
                </div>
                <div className="blog_box" >
                    <img src={require('../assets/14.jpg').default} alt='blog_img' className="blog_box_img"  />
                    <h1 className="blog_box_header" >8 Calendriers Uniques pour des Décomptes Branchés</h1>
                    <p className="blog_box_description">
                    Une fois les chaussettes soigneusement accrochées à la cheminée, lancez le décompte des jours jusqu'à Noël avec l'un de ces calendriers de l'Avent originaux.
                    </p>
                </div>
                <div className="blog_box" >
                    <img src={require('../assets/14.jpg').default} alt='blog_img' className="blog_box_img"  />
                    <h1 className="blog_box_header" >8 Calendriers Uniques pour des Décomptes Branchés</h1>
                    <p className="blog_box_description">
                    Une fois les chaussettes soigneusement accrochées à la cheminée, lancez le décompte des jours jusqu'à Noël avec l'un de ces calendriers de l'Avent originaux.
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Blog
