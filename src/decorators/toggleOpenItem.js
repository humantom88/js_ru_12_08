import React from 'react'
//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, 
//не привязывайся к названиям сущностей типа Article. Лучше называй toggleOpenItem, например

export default (Component) => {
    return class ToggleOpenComponent extends React.Component {
        state = {
            openItemId: null
        }

        toggleOpenItem = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openItemId: id === this.state.openItemId ? null : id
            })
        }

        render() {
            return <Component {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem}/>
        }
    }
}
