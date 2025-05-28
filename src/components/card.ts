export class Card {
    constructor(
        public logo: string,
        public cantidad_miembros: string,
        public nombre_grupo: string,
        public descripcion_grupo: string,
        public btn_ver_mas: string,
        public btn_unirse_grupo: string

    ) { }

    renderHTML() {
        document.body.innerHTML= `
        <section class = "flex justify-center items-center min-h-screen bg-gray-200"> 
            <div class="bg-white rounded-xl p-4 w-80 relative shadow-md"> 
                <img class="w-10 rounded-full" src="${this.logo}" alt="logo">         
                <span class="absolute top-4 right-4 text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-1">${this.cantidad_miembros}</span>
                <h1 class="text-lg font-bold mt-3">${this.nombre_grupo}</h1>
                <p class= "text-sm text-gray-500 mt-1">${this.descripcion_grupo}</p>
                <div class="flex justify-end mt-4">
                    <button class="mr-2 text-gray-700 font-medium rounded-xl px-6 py-1 border border-gray-200">${this.btn_ver_mas}</button>
                    <button class="bg-blue-600 text-white rounded-xl px-6 py-1 hover:bg-blue-700">${this.btn_unirse_grupo}</button>
                </div>
            </div>
        </section>
        `   
    }

}

