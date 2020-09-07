

export function BandeauCleo() {
    const texts = [
       "Chaque pièce est réalisée à la main à la commande juste pour vous par ma mère dans sa maison du nord de la France. C'est pourquoi nous ne pouvons accepter plus d'une trentaine de commandes par ouverture de site.",
       "Les tissus proviennent de restes de grandes maisons, de designers ou d'usines. Ils peuvent aussi être vintage suite à des trouvailles en brocante, dans ce cas les commandes possibles seront plus limitées.",
       "Pas de collection, mais des nouveautés selon les saisons, nos désirs et les tissus trouvés. Il n'y a pas de packaging par soucis écologique. Les cartes de remerciements sont des brouillons récupérés d'artistes ou de peintres.",
       "Evidemment, comme tout est fabriqué à la commande, il est possible de faire n'importe quelle taille ou ajustement. Vous pouvez nous indiquer vos propres mesures dans les commentaires au moment du panier."]

    return (
        <section className="bg-cel-green">
            <div className="flex flex-wrap content-center">
           {texts.map((txt, i) =>
      <div key={i} className="sm:w-1/2 lg:w-1/4 lg:flex-shrink text-sm py-8 px-10 text-white">{txt}</div>
    )}
    </div>
        </section>
    )
}