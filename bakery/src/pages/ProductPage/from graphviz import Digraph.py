from graphviz import Digraph

dot = Digraph(
    'SystemArchitecture',
    filename='SystemArchitecture',
    format='png'
)

dot.attr(rankdir='TB')
dot.attr(splines='ortho')
dot.attr(nodesep='0.8')
dot.attr(ranksep='1.0')

# =========================
# Root
# =========================

dot.node(
    'SYS',
    'HỆ THỐNG TỐI ƯU HÓA\nLỘ TRÌNH',
    shape='box',
    style='rounded'
)

# =========================
# Modules
# =========================

with dot.subgraph() as s:
    s.attr(rank='same')

    s.node('M1','Quản lý\nđơn hàng',shape='box')
    s.node('M2','Quản lý xe &\ntài xế',shape='box')
    s.node('M3','Module\nTối ưu',shape='box')
    s.node('M4','Dashboard',shape='box')

# =========================
# Database
# =========================

dot.node(
    'DB',
    'Cơ sở dữ liệu\n(MySQL)',
    shape='cylinder'
)

# =========================
# System -> Modules
# (Không mũi tên)
# =========================

dot.edge('SYS','M1',arrowhead='none')
dot.edge('SYS','M2',arrowhead='none')
dot.edge('SYS','M3',arrowhead='none')
dot.edge('SYS','M4',arrowhead='none')

# =========================
# Modules <-> Database
# =========================

dot.edge('M1','DB',dir='both')
dot.edge('M2','DB',dir='both')
dot.edge('M3','DB',dir='both')
dot.edge('M4','DB',dir='both')

dot.render(view=True)

print("Done!")