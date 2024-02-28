use yew::prelude::*;

struct _Heading {
    header: String,
    content: Vec<String>,
}

fn _create_content() -> Vec<_Heading> {
    vec![
        _Heading {
            header: "Wyatt the Engineer".to_string(),
            content: vec!["I'm a low level programming enthusiast. I'm experienced in C, C++ and Rust, but obviously I've dabbled in all sorts of other stuff.".to_string(),
                          "I love trying out new problems, or learning about new ways of tackling old ones. Consequently, I'm constantly dabbling to try and find new ways to improve my development environment".to_string()],
        },
        _Heading {
            header: "Wyatt the Person".to_string(),
            content: vec!["I love to be outside, hiking, mountain biking, camping. I just need to be able to move and breath sometimes, programming work doesn't always allow that unfortunately.".to_string()]
        }
    ]
}

fn _render_heading(h: _Heading) -> Html {
    html! {
        <div class="p-5">
            <p class="text-zinc-50 noki text-3xl"> {h.header.clone()} </p>
            <p class="text-zinc-50 noki"> {h.content.clone()} </p>
        </div>
    }
}

#[function_component(AboutMe)]
pub fn about_me() -> Html {
    html! {
        <div class="h-full bg-zinc-950 flex flex-col">
            <div class="p-5">
                <p class="text-zinc-50 noki text-4xl"> {"Wyatt the Engineer"} </p>
            </div>
        </div>
    }
}
