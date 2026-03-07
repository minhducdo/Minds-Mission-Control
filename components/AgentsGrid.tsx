"use client";
type Agent = {id:string;name:string;headline:string;tags:string[];load:number;};
const AGENTS:Agent[] = [{id:"switchboard-curator",name:"Switchboard Curator", headline:"Orchestrates multi-channel routing", tags:["routing","enrichment","SLA"],load:72}];export default function AgentsGrid() {return <div>{AGENTS.map(a => <div key={a.id}>{a.name}</div>)}</div>;}