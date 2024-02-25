<script>
    import Accordio from "../lib/components/accordio.svelte";
</script>

<section>
    <Accordio
        title="My Header 1"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum enim, fugit provident repellat, ratione at dignissimos eum voluptatum consequuntur reiciendis iste sed voluptate. Minus dolorum hic amet velit repudiandae."
        first={true}
    />
    <Accordio
        title="My Header 2"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum enim, fugit provident repellat, ratione at dignissimos eum voluptatum consequuntur reiciendis iste sed voluptate. Minus dolorum hic amet velit repudiandae."
        first={false}
    />
</section>

<style>
    section {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
</style>