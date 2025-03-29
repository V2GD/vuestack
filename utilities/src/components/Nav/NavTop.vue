<template>
    <div class="nav-top">
        <div class="nav-top__left">
            <slot name="left"/>
        </div>
        <div class="nav-top__center">
             <slot name="center"/>
        </div>
        <div class="nav-top__right">
             <slot name="right"/>
        </div>
    </div>
</template>