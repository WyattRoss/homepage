use yew::prelude::*;

#[function_component(HomePage)]
pub fn home_page() -> Html {
    html! {
        <div class="grid content-center h-screen bg-zinc-950">
            <div>
                <p class="text-8xl noki text-zinc-50"> {"hi im wyatt"} </p>
            </div>
            <div>
                <a href="/projects" class="text-zinc-50 noki"> {"check out the stuff i do"} </a>
            </div>
            <div>
                <a href="/about" class="text-zinc-50 noki"> {"learn about me"} </a>
            </div>
            <div>
                <a href="/talk" class="text-zinc-50 noki"> {"get in touch"} </a>
            </div>
        </div>
    }
}
