import Vue from 'vue';
import Button from '../src/packages/button/button.vue'

describe('Button', () => {
    // 检查原始组件选项
    it('has a created hook', () => {
      expect(typeof Button.created).to.eql('function')
    })
})

