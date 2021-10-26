flex-grow: 用于将flex container中剩余的空间进行重新分配，每个flex item可以分配的大小与flex-grow设置的值有关。

```css
<div class="parent">
  <div class="child child1">child1</div>
  <div class="child child2">child2</div>
  <div class="child child3">child3</div>
</div>
```

假设parent的宽度为900px,每个child的宽度为100px，则parent剩余的可分配空间为600px，此时如果将child1和child2的flex-grow设置为1，child3的flex-grow设置为2，则三个child的flex-grow的总和为1+1+2=4，由于parent剩余的可分配空间为600px，则child1和child2分配到的空间为600px / 4 * 1 = 150px，而child3分配到的空间为600px / 4 * 2 = 300px。

对于flex-shrink，效果跟flex-grow的效果是相似的，只不过，这里不是分配flex container的剩余空间了。

flex-basis与width的作用效果相同，都是用于设定元素的初始宽度大小。