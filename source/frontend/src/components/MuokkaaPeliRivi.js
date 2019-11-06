import React from 'react';
import {Table,Button,Dropdown,Input} from 'semantic-ui-react';


export default class MuokkaaPeliRivi extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			kokoelma:props.item.kokoelma,
			nimi:props.item.nimi,
			kuvaus:props.item.kuvaus,
			kategoriat:props.item.kategoriat
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	editItem = () => {
		let item = {
			_id:this.props.item._id,
			kokoelma:this.state.kokoelma,
			nimi:this.state.nimi,
			kuvaus:this.state.kuvaus,
			kategoriat:this.state.kategoriat
		}
		this.props.editItem(item);
	}
	cancel = () => {
		this.props.cancel();
	}
	
	handleSelect = (event,data) => {
		let state = {};
		state[data.name] = data.value;
		this.setState(state);
	}
	
	render() {
		
		return(
			<Table.Row>
				<Table.Cell>
					<Dropdown placeholder="Valitse kokoelma"
							  onChange={this.handleSelect}
							  name="kokoelma"
							  fluid selection
							  options={this.props.kokoelmalista}
							  value={this.state.kokoelma}/>
				</Table.Cell>
				<Table.Cell>
					<Input type="text"
							name="nimi"
							required
							fluid
							onChange={this.onChange}
							value={this.state.nimi}/>	
				</Table.Cell>
				<Table.Cell>
					<Input type="text"
							name="kuvaus"
							fluid
							onChange={this.onChange}
							value={this.state.kuvaus}/>	
				</Table.Cell>
				<Table.Cell>
					<Dropdown placeholder="Valitse kategoriat"
							  onChange={this.handleSelect}
							  name="kategoriat"
							  fluid selection multiple
							  options={this.props.kategorialista}
							  value={this.state.kategoriat}/>
					
				</Table.Cell>
				<Table.Cell>
					<Button color="green"
							name={this.props.item._id}
							onClick={this.editItem}
							disabled={!this.state.nimi}>Tallenna</Button>
				</Table.Cell>
				<Table.Cell>
					<Button color="red"
							onClick={this.cancel}>Peruuta</Button>
				</Table.Cell>
			</Table.Row>
		)		
	}
}