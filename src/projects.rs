use url::Url;
use yew::{prelude::*, virtual_dom::VNode};

use crate::nav::BackButton;

#[derive(Debug, Properties, PartialEq)]
struct ProjectEntry {
    name: String,
    link: Option<Url>,
    description: Vec<String>,
}

fn create_projects() -> Vec<ProjectEntry> { //maybe deserialize JSON or a DB later?
    vec![
        ProjectEntry {
            name: "EzASM".to_string(),
            link: Some(Url::parse("https://github.com/ezasm-org/EzASM").unwrap()),
            description: vec!["An assembly-like programming language used in education. EzASM has a relatively small instruction set and the goal of the project was to allow students to learn low level concepts with minimal overhead (no syscalls, for instance).".to_string(),
                                " The app was written in Java, using Swing for the frontend. I personally worked on fleshing out the instruction set and a lot of the user-facing ergonomics (multiple editing tabs, hotkeys, etc.).".to_string()],
        },
        ProjectEntry {
            name: "REzASM".to_string(),
            link: Some(Url::parse("https://github.com/ezasm-org/EzASM").unwrap()),
            description: vec!["A port of the above from Java to Rust. I personally worked on the lexer, big chunks of the simulator, and an increasing portion of the frontend (which was written in React). I also became the lead maintainer of the project at the end of 2023.".to_string()],
        },
        ProjectEntry {
            name: "NeoVim Starter".to_string(),
            link: Some(Url::parse("https://github.com/WyattRoss/Nvim-Presentation").unwrap()),
            description: vec!["A presentation I made about effective configuration of NeoVim (the editor I primarily use). Included with the presentation is a sample configuration with some basic plugins included. I like to think of it as something akin to kickstart.nvim, but slightly less minimal and organized a bit differently.".to_string()]
        }
    ]
}

fn project_display(entry: &ProjectEntry) -> Html {
    let title = match &entry.link {
        Some(link) => html! {
            <a href={link.to_string()} class="text-3xl text-zinc-50 underline noki" target="_blank"> {entry.name.clone()} </a>
        },
        None => html! {
            <p class="text-3xl text-zinc-50 underline noki"> {entry.name.clone()} </p>
        },
    };

    let paragraphs: Vec<VNode> = entry.description.iter().map(|s| html! { <> <p class="text-zinc-50 noki"> {s.clone()} </p> <br/> </>}).collect();

    html! {
            <div class="w-3/5">
                {title}
                {paragraphs}
            </div>
    }
}

#[function_component(ProjectPage)]
pub fn project_page() -> Html {
    let projects = create_projects()
        .iter()
        .map(|p| project_display(p))
        .collect::<Html>();
    html! {
        <div class="h-full bg-zinc-950 flex flex-col">
            <div class="px-10 pt-10">
            <p class="text-zinc-50 noki text-6xl"> {"Projects"} </p>
                {projects}
            </div>
            <BackButton/>
        </div>
    }
}
