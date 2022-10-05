import { mount, VueWrapper } from '@vue/test-utils'
import { describe, test, expect, beforeEach } from 'vitest';
import TodoApp from '../../../components/TodoApp.vue';

describe('TodoApp.vue', () => {
    //let wrapper: VueWrapper;

    test('renders a todo', () => {
        const wrapper = mount(TodoApp);
    
        const todo = wrapper.get('[data-test="todo"]')
    
        expect(todo.text()).toBe('Learn Vue.js 3')
    })
})
