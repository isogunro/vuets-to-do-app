import { mount, VueWrapper } from '@vue/test-utils'
import { describe, test, expect, beforeEach } from 'vitest';
import TodoApp from './TodoApp.vue';

describe('TodoApp.vue', () => {
    //let wrapper: VueWrapper;

    test('renders a todo', () => {
        const wrapper = mount(TodoApp);
    
        const todo = wrapper.get('li#id1')
    
        expect(todo.text()).contain('Learn Vue.js 3')
    })
})
